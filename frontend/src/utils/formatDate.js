export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'America/Los_Angeles',
        hour12: true
    }).format(new Date(Date.parse(date)));
};