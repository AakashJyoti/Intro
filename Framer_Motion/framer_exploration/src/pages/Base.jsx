import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { bases } from "../constants";
import { motion } from "framer-motion";

export default function Base({ addBase, pizza }) {
  return (
    <motion.div
      className="base container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.2 }}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{
                scale: 1.1,
                color: "#F8e112",
                originX: 0,
              }}
              transition={{
                type: "tween",
                duration: 0.1,
              }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: "150" }}
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}

Base.propTypes = {
  addBase: PropTypes.func.isRequired,
  pizza: PropTypes.shape({
    base: PropTypes.string,
  }).isRequired,
};
