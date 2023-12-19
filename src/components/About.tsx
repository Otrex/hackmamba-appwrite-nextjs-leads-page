export default function About() {
  return (
    <section>
      <div className="flex flex-row px-24 mb-24 gap-10 items-center text-left">
        <div className="w-full flex items-center">
          <div className="max-h-[250px] overflow-hidden">
            <img
              src="/secret.jpg"
              alt="secret"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full flex items-center">
          <div>
            <h2 className="text-2xl mb-[0.625rem] font-extrabold">
              🔐 The Secret Society of Book Aficionados
            </h2>

            <p>
              Why settle for the ordinary when you can be part of the
              extraordinary? Our covert book sale leads collection is your
              exclusive ticket to a clandestine library of upcoming releases,
              secret discounts, and curated bookish experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-2xl text-center mb-5 font-extrabold">
          📌 What Awaits You in the Shadows:
        </h2>

        <ul className="text-left max-w-[750px] mx-auto">
          <li className="mb-5">
            <strong>Sneak Peeks:</strong> Gain access to hidden corners of our
            bookish haven, where forthcoming releases wait to be discovered by
            only the most discerning readers.
          </li>

          <li className="mb-5">
            <strong>Ciphered Discounts:</strong> Receive covert codes for
            special discounts on your favorite books – a perk reserved solely
            for our elusive society members.
          </li>

          <li className="mb-5">
            <strong>Whispered Whodunits:</strong> Be the first to unravel the
            mysteries of upcoming releases in genres ranging from spine-tingling
            thrillers to mind-bending mysteries.
          </li>

          <li className="mb-5">
            <strong>Silent Soirees:</strong> Attend exclusive virtual gatherings
            and engage in hushed conversations about the literary world. Your
            fellow members are waiting to swap bookish secrets!
          </li>
        </ul>

        <div className="grid grid-cols-3 gap-10">
          <div></div>
        </div>
      </div>
    </section>
  );
}
