import * as React from "react";


const months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};

const spanishMonths = {
  0: {
    name: "January",
    shortName: "Jan",
    spanishCalendarMonthNumber: 0
  },
  1: {
    name: "February",
    shortName: "Feb",
    spanishCalendarMonthNumber: 1
  },
  2: {
    name: "March",
    shortName: "Mar",
    spanishCalendarMonthNumber: 2
  },
  3: {
    name: "April",
    shortName: "Apr",
    spanishCalendarMonthNumber: 3
  },
  4: {
    name: "May",
    shortName: "May",
    spanishCalendarMonthNumber: 4
  },
  5: {
    name: "June",
    shortName: "Jun",
    spanishCalendarMonthNumber: 5
  },
  6: {
    name: "July",
    shortName: "Jul",
    spanishCalendarMonthNumber: 6
  },
  7: {
    name: "August",
    shortName: "Aug",
    spanishCalendarMonthNumber: 7
  },
  8: {
    name: "September",
    shortName: "Sept",
    spanishCalendarMonthNumber: 8
  },
  9: {
    name: "October",
    shortName: "Oct",
    spanishCalendarMonthNumber: 9
  },
  10: {
    name: "November",
    shortName: "Nov",
    spanishCalendarMonthNumber: 10
  },
  11: {
    name: "December",
    shortName: "Dec",
    spanishCalendarMonthNumber: 11
  }
};


const spanishDays = {
  0: {
    name: "Sunday",
    shortName: "Sun",
    spanishCalendarWeekdayNumber: 6
  },
  1: {
    name: "Monday",
    shortName: "Mon",
    spanishCalendarWeekdayNumber: 0
  },
  2: {
    name: "Tuesday",
    shortName: "Tue",
    spanishCalendarWeekdayNumber: 1
  },
  3: {
    name: "Wednesday",
    shortName: "Wed",
    spanishCalendarWeekdayNumber: 2
  },
  4: {
    name: "Thursday",
    shortName: "Thur",
    spanishCalendarWeekdayNumber: 3
  },
  5: {
    name: "Friday",
    shortName: "Fri",
    spanishCalendarWeekdayNumber: 4
  },
  6: {
    name: "Saturday",
    shortName: "Sat",
    spanishCalendarWeekdayNumber: 5
  }
};

const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];


const initState = {
  isOpen: false,
  date: "",
  displayDate: "",
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  daysInMonthArr: [],
  blankDaysArr: []
};

const datePickerReducer = (state, action) => {
  switch (action.type) {
    case "SET_INIT_STATE": {
      const today = new Date();
      const month = today.getMonth();
      const year = today.getFullYear();

      const dayOfWeek = new Date(year, month).getDay();
      const spanishWeekday =
        spanishDays[dayOfWeek].spanishCalendarWeekdayNumber;
      const displayDate = getSpanishDate(
        new Date(year, month, today.getDate())
      );
      const date = formatYearsMonthDay(new Date(year, month, today.getDate()));

      // Get last day number of the previous actual month
      const daysInMonth = new Date(year, month, 0).getDate();

      // Get the number (0-6) on which the actual month starts
      let blankDaysArr = [];
      for (let i = 1; i <= spanishWeekday; i++) {
        blankDaysArr.push(i);
      }

      let daysInMonthArr = [];
      for (let i = 1; i < daysInMonth; i++) {
        daysInMonthArr.push(i);
      }

      return {
        ...state,
        date,
        displayDate,
        month,
        year,
        daysInMonthArr,
        blankDaysArr
      };
    }

    case "IS_OPEN": {
      return {
        ...state,
        isOpen: action.isOpen
      };
    }

    case "SET_DATE": {
      const dateToFormat = new Date(state.year, state.month, action.dayNumber);
      const date = formatYearsMonthDay(dateToFormat);
      const displayDate = getSpanishDate(dateToFormat);

      return {
        ...state,
        date,
        displayDate,
        isOpen: false
      };
    }

    case "ADD_MONTH": {
      let newYear;
      let newMonth;
      if (state.month === 11) {
        newMonth = 0;
        newYear = state.year + 1;
      } else {
        newMonth = state.month + 1;
        newYear = state.year;
      }

      const newMonthFirstWeekdayNumber = new Date(
        newYear,
        newMonth,
        1
      ).getDay();
      const spanishFirstWeekdayNumber =
        spanishDays[newMonthFirstWeekdayNumber].spanishCalendarWeekdayNumber;
      const daysInMonth = new Date(newYear, newMonth + 1, 0).getDate();

      let blankDaysArr = [];
      for (let i = 1; i <= spanishFirstWeekdayNumber; i++) {
        blankDaysArr.push(i);
      }

      let daysInMonthArr = [];
      for (let i = 1; i <= daysInMonth; i++) {
        daysInMonthArr.push(i);
      }

      return {
        ...state,
        month: newMonth,
        year: newYear,
        daysInMonthArr,
        blankDaysArr
      };
    }

    case "SUBTRACT_MONTH": {
      let newYear;
      let newMonth;
      if (state.month === 0) {
        newMonth = 11;
        newYear = state.year - 1;
      } else {
        newMonth = state.month - 1;
        newYear = state.year;
      }

      const newMonthFirstWeekdayNumber = new Date(
        newYear,
        newMonth,
        1
      ).getDay();
      const spanishFirstWeekdayNumber =
        spanishDays[newMonthFirstWeekdayNumber].spanishCalendarWeekdayNumber;
      const daysInMonth = new Date(newYear, newMonth + 1, 0).getDate();

      let blankDaysArr = [];
      for (let i = 1; i <= spanishFirstWeekdayNumber; i++) {
        blankDaysArr.push(i);
      }

      let daysInMonthArr = [];
      for (let i = 1; i <= daysInMonth; i++) {
        daysInMonthArr.push(i);
      }

      return {
        ...state,
        year: newYear,
        month: newMonth,
        daysInMonthArr,
        blankDaysArr
      };
    }

    default: {
      throw Error("Error un reducer");
    }
  }
};

const getSpanishDate = (date) => {
  const year = date.getFullYear();
  const monthShortName = spanishMonths[date.getMonth()].shortName;
  const day = ("0" + date.getDate()).slice(-2);
  const dayShortName = spanishDays[date.getDay()].shortName;

  return `${dayShortName} ${day} ${monthShortName}, ${year}`;
};

const formatYearsMonthDay = (date) => {
  return (
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2)
  );
};

const DatePicker = () => {
  const [state, dispatch] = React.useReducer(datePickerReducer, initState);
  const displayDateRef = React.useRef();
  const daysDivRef = React.useRef();

  React.useEffect(() => {
    dispatch({ type: "SET_INIT_STATE" });
  }, []);

  const isToday = (dayNumber) => {
    const today = new Date();
    const day = new Date(state.year, state.month, dayNumber);

    return today.toDateString() === day.toDateString() ? true : false;
  };

  const handleDatePickerKeydown = (event) => {
    if (event.charCode === 0) {
      dispatch({ type: "IS_OPEN", isOpen: false });
    }
  };

  const toggleDisplayDateFocus = ()=> {
    
    const displayDate = displayDateRef.current;
    if (displayDate.classList.contains("shadow-outline")) {
      displayDate.classList.remove("shadow-outline");
      displayDate.blur();
    } else {
      displayDate.classList.add("shadow-outline");
      displayDate.focus();
    }

    const daysDiv = daysDivRef.current;
    daysDiv.focus();
  };

  return (
    <div className="w-full">
            <div className="relative">
              <input
                type="text"
                readOnly
                value={state.displayDate}
                ref={displayDateRef}
                onClick={() => {
                  dispatch({ type: "IS_OPEN", isOpen: !state.isOpen });
                  toggleDisplayDateFocus();
                }}
                onKeyDown={event => handleDatePickerKeydown(event)}
                onBlur={() => {
                  dispatch({ type: "IS_OPEN", isOpen: false });
                  toggleDisplayDateFocus();
                }}
                className="w-full pl-4 pr-10 py-3 leading-none rounded-sm border text-gray-600 font-medium outline-none focus:outline-none focus:shadow-outline"
                placeholder="Select date"
              />

              <div className="absolute top-0 right-0 px-3 py-2">
                <svg
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div
                className={`focus:outline-none duration-200 mt-12 bg-white rounded-lg shadow p-4 absolute top-0 left-0 ${
                  !state.isOpen ? "invisible opacity-0" : "visible opacity-100"
                }`}
                style={{ width: "17rem" }}
                ref={daysDivRef}
                tabIndex={-1}
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="text-lg font-bold text-gray-800">
                      {months[state.month]}
                    </span>
                    <span className="ml-1 text-lg text-gray-600 font-normal">
                      {state.year}
                    </span>
                  </div>
                  <div>
                    <button
                      type="button"
                      className={`transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full focus:shadow-outline focus:outline-none mr-1`}
                      onMouseDown={event => event.preventDefault()}
                      onClick={() => dispatch({ type: "SUBTRACT_MONTH" })}
                    >
                      <svg
                        className="h-6 w-6 text-gray-500 inline-flex"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onMouseDown={event => event.preventDefault()}
                      className={`transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full focus:shadow-outline focus:outline-none`}
                      onClick={() => dispatch({ type: "ADD_MONTH" })}
                    >
                      <svg
                        className="h-6 w-6 text-gray-500 inline-flex"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap mb-3 -mx-1">
                  {days.map((day, index) => (
                    <div
                      key={index}
                      style={{ width: "14.26%" }}
                      className="px-1"
                    >
                      <div className="text-gray-800 font-medium text-center text-xs">
                        {day}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap -mx-1">
                  {state.blankDaysArr.map(day => (
                    <div
                      key={day}
                      style={{ width: "14.28%" }}
                      className="text-center border p-1 border-transparent text-sm"
                    />
                  ))}
                  {state.daysInMonthArr.map((dayNumber, index) => (
                    <div
                      key={index}
                      style={{ width: "14.28%" }}
                      className="px-1 mb-1"
                    >
                      <div
                        onClick={() => {
                          dispatch({ type: "SET_DATE", dayNumber });
                          toggleDisplayDateFocus();
                        }}
                        onMouseDown={event => event.preventDefault()}
                        className={`cursor-pointer text-center text-sm leading-none rounded-full leading-loose transition ease-in-out duration-100 
                        ${
                          isToday(dayNumber)
                            ? "bg-blue-500 text-white"
                            : "text-gray-700 hover:bg-blue-200"
                        }`}
                      >
                        {dayNumber}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
  );
};

export default DatePicker;
