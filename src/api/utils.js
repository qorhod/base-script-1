// دوال مساعدة لإدارة الأخطاء والاستجابات
export const handleApiErrors = (error) => {
    if (error.response) {
        return error.response.data.message || 'An error occurred';
    }
    return 'Network Error';
};

export const formatResponse = (response) => response.data;
