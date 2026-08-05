const username = 'salilmishra4455';
const query = `
query userProfileCalendar($username: String!, $year: Int) {
    matchedUser(username: $username) {
        userCalendar(year: $year) {
            submissionCalendar
        }
        submitStatsGlobal {
            acSubmissionNum {
                difficulty
                count
            }
        }
    }
}
`;

fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
    },
    body: JSON.stringify({ query, variables: { username } }),
})
.then(res => res.json())
.then(data => {
    console.log("Response data:", JSON.stringify(data).substring(0, 300));
})
.catch(console.error);
