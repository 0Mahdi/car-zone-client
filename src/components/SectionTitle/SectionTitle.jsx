
const SectionTitle = ({ heading, subHeading }) => {
    // Define a function to determine the background color based on the length of subHeading
    const getBackgroundColor = () => {
      if (subHeading.length < 10) {
        return "yellow"; // Change this to your desired color
      } else {
        return "yellow"; // Change this to another desired color
      }
    };
  
    return (
      <div className="mx-auto text-center md:w-4/12 my-8">
        <p
          className="text-yellow-800 mb-2"
        >
          {subHeading}
        </p>
        <h3 className="text-2xl uppercase italic border-y-4 py-4 rounded-full text-black"  style={{ backgroundColor: getBackgroundColor() }}>{heading}</h3>
      </div>
    );
  };
  
  export default SectionTitle;