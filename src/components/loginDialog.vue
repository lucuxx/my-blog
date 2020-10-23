<template>
  <section class="login">
    <!--    登录弹框     -->
    <el-dialog
      title="请登录！"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <el-form :model="userForm" :rules="rules" ref="userForm">
        <el-form-item label="昵称（必填）" prop="name">
          <el-input
            type="text"
            v-model="userForm.name"
            placeholder="请输入昵称"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱（必填）" prop="email">
          <el-input
            type="email"
            v-model="userForm.email"
            placeholder="请输入邮箱"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="login">确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class login extends Vue {
  userForm: any = {
    name: '',
    email: '',
  }
  userInfo: any = {}

  rules: any = {
    // 校验规则
    name: [
      { required: true, message: '请输入昵称', trigger: 'blur' },
      { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' },
    ],
    email: [
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      {
        type: 'email',
        message: '请输入正确的邮箱地址',
        trigger: ['blur', 'change'],
      },
    ],
  }

  urls: Array<string> = [
    'https://i.loli.net/2020/10/24/n1SK93CI6BA2Wxu.jpg',
    'https://i.loli.net/2020/10/24/rGLxOIaZEsMp3q2.jpg',
    'https://i.loli.net/2020/10/24/1LFNnUHYCqouylK.jpg',
    'https://i.loli.net/2020/10/24/ntqyX8CDRvI1pli.jpg',
    'https://i.loli.net/2020/10/24/pAkCHVhb3tX7IZe.jpg',
    'https://i.loli.net/2020/10/24/4ZDyu2cYgxfOQjH.jp',
  ]

  @Prop(Boolean) dialogVisible = false

  cancel() {
    this.$emit('changeDialog', false)
  }

  login() {
    const userForm: any = this.$refs['userForm']
    userForm.validate(async (valid: any) => {
      if (valid) {
        this.userForm.url = this.urls[
          Math.floor(Math.random() * this.urls.length)
        ]
        this.userForm.userId =
          Date.now() + '' + Math.floor(Math.random() * 10000)
        // 校验成功把用户信息存入本地，关闭注册表单,调用更新评论接口
        window.localStorage.setItem('userInfo', JSON.stringify(this.userForm))
        this.$message.success('注册成功！')
        this.userInfo = this.userForm
        this.$emit('changeDialog', false)
      } else {
        this.$message.warning('请校验昵称和邮箱！')
      }
    })
  }
}
</script>

<style lang="less" scoped></style>
