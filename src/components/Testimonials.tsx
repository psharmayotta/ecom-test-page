const testimonials = [
  { id: 1, text: "Great quality!", author: "Alice" },
  { id: 2, text: "Loved the fast shipping!", author: "Bob" },
];

const Testimonials = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">What our customers say</h2>
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="border p-2 my-2">
          <p>"{testimonial.text}"</p>
          <p>- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
