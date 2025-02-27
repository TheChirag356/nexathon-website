const TeamMembersList = [
  {
    name: "Harleen Kaur",
    team: "Core",
    role: "President",
    img: "/team_img/core/harleen_kaur.jpg",
    links: {
      linkedin: "www.linkedin.com/in/harleen-kaur-b94099257",
      x: "https://x.com/hk112767",
    },
  },
  {
    name: "Virat Chauhan",
    team: "Core",
    role: "Vice-President",
    img: "/team_img/core/virat_chauhan.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/viratchauhan/",
      x: "https://x.com/viratzzs",
      github: "https://github.com/ViratCh04"
    },
  },
  {
    name: "Chirag Arora",
    team: "Core",
    role: "Management Team Lead",
    img: "/team_img/core/chirag_arora.png",
    links: {
      linkedin: "https://www.linkedin.com/in/chiragarora0/",
      x: "https://x.com/chiragkun",
      github: "https://github.com/TheChirag356",
    },
  },
  {
    name: "Gurnoor Singh Khurana",
    team: "Core",
    role: "Marketing Team Lead",
    img: "/team_img/core/gurnoor_singh_khurana.png",
    links: {
      linkedin:
        "https://www.linkedin.com/in/gurnoor-singh-khurana?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      x: "https://x.com/gurnoorkhurana9?s=21",
      github: "https://github.com/Gurnoor09",
    },
  },
];

/* Instructions
  All the links in the to individual social accounts are optional. If you don't want to include a link, you can remove the key-value pair from the object.
  In the team section only add the team name such as "Design" or "Management" or "Tech" do not add "Team at the end".
  In the role, choose from these -> "Team Member", "Team Co-lead", "Team Lead".
  Your social links should be full links, i.e., "https://www.linkedin.com/your-username"
  Use X for all twitter accounts, do not use twitter as the key.
  Your image link should not be discord image links as they can get expired. Share non-expirable links.
*/

const Teams = ["Core", "Design", "Management", "Tech", "Marketing", "Content"];

export { TeamMembersList, Teams };
