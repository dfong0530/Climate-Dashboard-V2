

/*
    Area Chart

*/

export const AreaOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            labels: {
                color: "#fff"
            }
        }
    },

    scales: {
        x: {
            grid: {
                color: "#fff"
            },
            ticks: {
                color: "#fff"
            }
        },
        y: {
            grid: {
                color: "#fff"
            },
            ticks: {
                color: "#fff"
            }
        }
    }
    
};

export const MakeAreaData = (data) => {

    return {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "New York",
                data: data[0],
                fill: true,
                backgroundColor: "rgba(39, 71, 229, 0.2)",
                borderColor: "rgba(39, 71, 229, 1)",
                tension: .40
            },
            {
                label: "California",
                data: data[1],
                fill: true,
                backgroundColor: "rgba(83, 142, 193, 0.2)",
                borderColor: "rgba(83, 142, 193, 1)",
                tension: .40
            },
            {
                label: "Illinois",
                data: data[2],
                fill: true,
                backgroundColor: "rgba(135, 206, 250, 0.2)",
                borderColor: "rgba(135, 206, 250, 1)",
                tension: .40
            },
            {
                label: "Florida",
                data: data[3],
                fill: true,
                backgroundColor: "rgba(39, 216, 229, 0.2)",
                borderColor: "rgba(39, 216, 229, 1)",
                tension: .40
            },
            {
                label: "Texas",
                data: data[4],
                fill: true,
                backgroundColor: "rgba(39, 229, 197, 0.2)",
                borderColor: "rgba(39, 229, 197, 1)",
                tension: .40
            }
        ]
    }

};


/*
    MAP DATA
*/

export const material = {
  ambient: 1.05,
  diffuse: .6,
  shininess: 32,
  specularColor: [51, 51, 51]
};

//Initial State of Map Configurations
export const initialViewState = {
  latitude: 37.0902,
  longitude: -95.7129,
  zoom: 3.2
}


//Map Hexagon Colors
export const colorRange = [
    [1, 152, 189],
    [73, 227, 206],
    [216, 254, 181],
    [254, 237, 177],
    [254, 173, 84],
    [209, 55, 78]
];



/*
    TABLE DATA
*/

//Functions used internally to create rows. Used in initialTableData
function createData(state, jan, feb, mar, apr, may, jun, jul, aug, sept, oct, nov, dec) {
  return { state, jan, feb, mar, apr, may, jun, jul, aug, sept, oct, nov, dec };
}

//Sets a template table up while data is being fetched.
export const initialTableData = () => {

    return [
        createData('New-York', 38.0, 32.0, 43.0, 45.0, 54.0, 68.0, 82.0, 78.0, 69.0, 63.0, 59.0, 41.0),
        createData('California', 61.0, 63.0, 67.0, 77.0, 72.0, 73.0, 81.0, 83.0, 78.0, 83.0, 66.0, 75.0),
        createData('Illinois', 32.0, 30.0, 31.0, 32.0, 62.0, 66.0, 70.0, 71.0, 75.0, 65.0, 47.0, 44.0),
        createData('Florida', 77.0, 71.0, 78.0, 79.0, 81.0, 79.0, 82.0, 86.0, 85.0, 85.0, 77.0, 74.0),
        createData('Texas', 45.0, 49.0, 48.0, 63.0, 64.0, 76.0, 85.0, 94.0, 95.0, 78.0, 70.0, 67.0),
    ];
};

//This function takes in data fetched and creates a table. From the data.
export const MakeTableData = (data) => {
    let ret = [];
    let states = ["New York", "California", "Illinois", "Florida", "Texas"];

    for(let i = 0; i < data.length; i++){
        ret.push(createData(states[i], data[i][0], data[i][1], data[i][2], data[i][3], data[i][4], data[i][5],
            data[i][6], data[i][7], data[i][8], data[i][9], data[i][10], data[i][11]));
    }

    return ret;
}
