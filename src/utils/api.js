export const fetchData = () => {
  return new Promise((resolve, reject) => {
    const data = [
      {
        name: 'Full Stack Course',
        introduction: 'This course is for students who are interested in full stack and eager to have extensive knowledge of full stack. Don\'t hesitate. Enroll the course now! ',
        price: '$5000',
        language: 'Chinese',
        duration: '4 months',
        location: 'Sydney',
        imageUrl: 'src/images/office-desk-with-laptop.jpg',
        isNew: true
      },
      {
        name: 'UI/UX Design',
        introduction: 'This course is suitable to students who are keen on UI/UX',
        price: '$3000',
        language: 'English',
        duration: '2 months',
        location: 'Melbourne',
        imageUrl: 'src/images/ui_ux.jpg',
        isNew: false
      }
    ]
    setTimeout(() => {
      resolve(data)
    }, 2000)
  })
}