const Tooltip = props => (
    <span className="tooltip">
        {props.children}
        <span className="tooltiptext">{props.text}</span>
        <style jsx>{`
/* https://www.w3schools.com/css/css_tooltip.asp */
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;

  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
`}</style>
    </span>
)

export default Tooltip;