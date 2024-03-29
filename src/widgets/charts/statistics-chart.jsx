import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";
import {
  useMaterialTailwindController
} from "../../context/index";
export function StatisticsChart({ color, chart, title, description, footer }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType} =
    controller;
    const options = {
       grid: {
    show: false
  },
  chart: {
    toolbar: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 400,
      },
    },
  },
  xaxis: {
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
        fontFamily: "inherit",
        fontWeight: 400,
      },
    },
  },
  colors: ["#C62828", "#43AF50"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    };
  return (
    <Card className={` shadow-sm ${
      sidenavType === "dark" ? " bg-gray-800 bg-opacity-50 border-x border-y border-gray-800" : "border border-blue-gray-100 bg-white"
    }`}>
      <CardHeader variant="gradient" color={color} floated={false} shadow={false}>
        <Chart className={`${
      sidenavType === "dark" ? " bg-gray-800 border-x border-y border-gray-700 rounded-md" : "bg-white"
    }`} {...chart}
    options={options}
     />
      </CardHeader>
      <CardBody className="px-6 pt-0">
        <Typography variant="h6" color={sidenavType === 'dark' ? "white" : "blue-gray"}>
          {title}
        </Typography>
        <Typography variant="small" className={`font-normal ${
      sidenavType === "dark" ? "text-gray-600" : "text-blue-gray-600"
    }`}>
          {description}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className={` px-6 py-5 ${sidenavType ==='dark'? "border-t border-gray-800" : "border-t border-gray-300"}`}>
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

StatisticsChart.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsChart.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  chart: PropTypes.object.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsChart.displayName = "/src/widgets/charts/statistics-chart.jsx";

export default StatisticsChart;
