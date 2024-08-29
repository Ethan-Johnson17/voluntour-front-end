export function formatDate(projectDate) {
      let date = new Date(projectDate)
      let newDate = (date.getMonth() + 1) + '-' + (date.getDate() + 1) + '-' + (date.getFullYear().toString().substring(2, 4))
      return newDate
    }