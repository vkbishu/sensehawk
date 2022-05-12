import moment from 'moment';

export default {
    filters: {
        getTime(blog){
            if(blog.createdAt){
                return moment(blog.createdAt).format('MMM D');
            }
            return moment().format('MMM D');
        }
    }
}