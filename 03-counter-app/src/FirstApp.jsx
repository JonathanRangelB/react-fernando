import PropTypes from "prop-types"
export const FirstApp = ({title, subtitle, name}) => {
  // console.log(props);
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
  name: PropTypes.string
}

FirstApp.defaultProps = {
  // title: "No hay titulo",
  subtitle: 123,
  name: "No hay nombre"
}