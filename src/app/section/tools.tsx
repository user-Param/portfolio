export default function Tools() {
    const tools = [{image: "image", heading: "Datafeed", description: "The Datafeed Server is designed to aggregate real-time market data from various cryptocurrency exchanges (Binance, Jupiter, Birdeye) and distribute it to connected clients via WebSocket subscriptions"},
        {image: "image", heading: "Job Hunter", description: "Illustrators used a tool called Patchy Bomby to give surfaces in “Spider-Man: Across the Spider-Verse” their signature art looks. Learn how the illustrators adjusted their brush strokes and artwork at scale to illustrate the chase in Earth-928 (Miguel's dimension) in record-time."},
        {image: "image", heading: "trading bots", description: "Creators used a program called Rebelle to animate and illustrate Gwen's watercolor world. The result? Drippy, high-color backgrounds that move and reflect her every mood."},
        {image: "image", heading: "issuex", description: "Anonymous collaborative platform for sharing and improving solutions, enabling multiple approaches per problem through a simple write → push → improve workflow."}
    ];


  return (
   <div className="relative w-full h-[75vh] py-1">

  {/* Background image */}
  <img
    src="/assets/tools-bg.jpg"
    className="w-full h-full"
  />

  <img
    src="/assets/toolsfont.png"
    className="absolute inset-0 w-[45%] h-[45%] object-contain mt-10 ml-50"
  />

  <span className="absolute inset-0 z-20 flex mt-80 justify-center gap-3">
    {tools.map((tool) => (
      <span
        key={tool.heading}
        className="h-[330px] w-[220px] border border-black/9 bg-[#FFFFFF] p-3"
      >
        <img src="/assets/tools-bg.jpg" className="h-[40%] w-full" />
        <h1 className="text-[#000000]">{tool.heading}</h1>
        <p className="text-[13px]">{ tool.description }</p>
      </span>
    ))}
  </span>

</div>
  );
}