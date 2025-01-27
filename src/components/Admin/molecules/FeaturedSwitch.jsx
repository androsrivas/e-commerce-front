

const FeaturedSwitch = ({ checked, onChange,  }) => {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="featured" className={`text-sm font-medium text-black`}>Featured</label>
      <input
        type="checkbox"
        id="featured"
        checked={checked}
        onChange={onChange}
        className="w-10 h-5 bg-gray-300 rounded-full appearance-none cursor-pointer transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default FeaturedSwitch;
