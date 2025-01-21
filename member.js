function skillsMember() {
  // Get the skills from the member
  const member = getMember();
  const skills = member.skills;
  // Display the skills
  displaySkills(skills);
}