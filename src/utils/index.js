export const getStaticUrl = () => {
    if (process.env.NODE_ENV === 'production') {
        return './static';
    } else {
        return '/static';
    }
};
