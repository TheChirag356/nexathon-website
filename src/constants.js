const hackathonLink = "https://dorahacks.io";
const globalDateOfHackathon = 3;
const globalMonthOfHackathon = 4;

export const isHackathonLive = (problemStatements = false) => {
    const eventDate = problemStatements ? 21 : globalDateOfHackathon;
    const eventMonth = problemStatements ? 3 : globalMonthOfHackathon;
    const today = new Date();
    const targetDate = new Date(2025, eventMonth - 1, eventDate);

    return today >= targetDate; // Returns true if today is on or after the date
};

export { hackathonLink, globalDateOfHackathon as dateOfHackathon, globalMonthOfHackathon as monthOfHackathon };