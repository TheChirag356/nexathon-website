const hackathonLink = "https://dorahacks.io";
const dateOfHackathon = 3;
const monthOfHackathon = 4;

export const isHackathonLive = () => {
    const today = new Date();
    const targetDate = new Date(2025, monthOfHackathon - 1, dateOfHackathon);

    return today >= targetDate; // Returns true if today is on or after the hackathon date
};

export { hackathonLink, dateOfHackathon, monthOfHackathon };
