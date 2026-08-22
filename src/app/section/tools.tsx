export default function Tools() {
  return (
    <div className="relative w-full h-[60%]">
      {/* Background */}
      <img
        src="/assets/tools-bg.jpg"
        className="w-full h-full object-cover"
        alt=""
      />

      {/* Image on top */}
      <img
        src="/assets/toolsfont.png"
        className="absolute inset-0 w-[50%] h-[50%] object-contain"
        alt=""
      />
    </div>
  );
}