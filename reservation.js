const NumberOfTables = 3;
var BookedTable = 0;
const tableDetails = [];
var index = 0;
var flag = false;

const reser = (e) => {
  const userDate = document.getElementById("date").value;
  const UserTime = document.getElementById("time").value;

  // checks wheather any table is free or not is yes then the time and date will b stored and BookedTable will be incremented
  {
    if (BookedTable < NumberOfTables) {
      tableDetails[index++] = [
        {
          time: UserTime,
          date: userDate,
        },
      ];

      BookedTable++;
      flag = true;
      console.log("if wala" + index, BookedTable);
    }

    // if no table is free then the any free table which is not having the same date or time
    else {
      for (let { time, date } of tableDetails) {
        console.log("else wala" + index, BookedTable);
        if (time !== UserTime || date !== userDate) {
          tableDetails[index++] = [
            {
              time: UserTime,
              date: userDate,
            },
          ];
          break;
        }
      }
      console.log("else wala" + index, BookedTable);
    }
    console.log(tableDetails);

    if (flag) {
      alert("resrvation done");
    } else {
      alert("not avaliable");
    }
  }
};
