import axios from '../axios';

const utilUrl: string = 'comment';

// 获取留言
const getComment = (params: any): object => {
    return axios.get(`/api/${utilUrl}/getComment`, {params});
};
// 发表留言
const sendComment = (params: any): object => {
    return axios.post(`/api/${utilUrl}/sendComment`, params);
};

// 发表回复
const sendReply = (params: any): object => {
    return axios.post(`/api/${utilUrl}/sendReply`, params);
};

const comment = {
    getComment,
    sendComment,
    sendReply,
};
export default comment;
