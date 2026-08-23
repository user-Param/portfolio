export default function Tools() {
    const tools = [{image: "image", heading: "one", description: "The team invented FlixiVerse to explore characters' worlds and homes like they were real-life film sets. See how they scouted Gwen's apartment to find the perfect blocking and shots to create scenes with emotional impact."},
        {image: "image", heading: "two", description: "Illustrators used a tool called Patchy Bomby to give surfaces in “Spider-Man: Across the Spider-Verse” their signature art looks. Learn how the illustrators adjusted their brush strokes and artwork at scale to illustrate the chase in Earth-928 (Miguel's dimension) in record-time."},
        {image: "image", heading: "three", description: "Creators used a program called Rebelle to animate and illustrate Gwen's watercolor world. The result? Drippy, high-color backgrounds that move and reflect her every mood."},
        {image: "image", heading: "four", description: "Vulture was a “living drawing” — and he required a tool that could keep up with him. Artists used Kismet to work digitally and still give scenes a hand-drawn feel. This gave them precise control over how characters looked and moved."}
    ];


  return (
   <div className="relative w-full h-[60%] py-4">

  {/* Background image */}
  <img
    src="/assets/tools-bg.jpg"
    className="w-full h-full object-cover"
    alt=""
  />

  <img
    src="/assets/toolsfont.png"
    className="absolute inset-0 w-[50%] h-[50%] object-contain"
    alt=""
  />

  <span className="absolute inset-0 z-20 flex mt-95 justify-center gap-4">
    {tools.map((tool) => (
      <div
        key={tool.heading}
        className="h-[350px] w-[275px] border bg-white p-3"
      >
        <img src="" className="h-[40%] w-full" />
        {tool.heading}
        <p className="text-[13px]">{ tool.description }</p>
      </div>
    ))}
  </span>

</div>
  );
}