import moment from 'moment';

// Get array of times like ["00:00", "00:30" to "23:30"]
export const getTimesArray = () => {
    const hours = Array.from({
        length: 48
      }, (_, hour) => moment({
          hour: Math.floor(hour / 2),
          minutes: (hour % 2 === 0 ? 0 : 30)
        }).format('HH:mm')
      );
    return hours;
}

// Get array of numbers to a specific rang for pagination

export const getPagesArray = (totalPages) => {
  return new Array(totalPages).fill(null).map((v, i) => i);
}

// Get age from birthday

export function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

export function getDateWithoutTime(dateTime) {
  var date = new Date(dateTime.getTime());
    date.setHours(0, 0, 0, 0);
    return date;
}

export function getTotalDaysBetweenTwoDays(firstDate, secondDate) {
   const ONE_DAY = 1000 * 60 * 60 * 24;
    const differenceMs = Math.abs(firstDate - secondDate);
  console.log("DDDD => ", differenceMs);
   return Math.round(differenceMs / ONE_DAY);
}