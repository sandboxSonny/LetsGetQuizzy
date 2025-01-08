export const getInitials = (fullName: string) => {
  const nameParts = fullName.trim().split(" ");

  const initials = nameParts
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return initials;
};
