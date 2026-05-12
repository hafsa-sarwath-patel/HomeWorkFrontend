export const isTeacherUploadTime = () => {
  const hour = new Date().getHours();

  return hour >= 14 && hour < 16;
};

export const isStudentViewTime = () => {
  const hour = new Date().getHours();

  return hour >= 16;
};