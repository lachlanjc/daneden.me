import Image from "@/components/Image"
import Layout from "@/components/Layout"
import Link from "next/link"

export default function IndividualNotePage() {
  return (
    <Layout
      frontMatter={{
        title:
          "Daphne Oram — “An Individual Note of Music, Sound, and Electronics”",
      }}
    >
      <Image
        align="right"
        height={1739}
        src="books/individual-note.jpg"
        width={1235}
      />
      <p>
        Daphne Oram’s essay “An Individual Note of Music, Sound, and
        Electronics” has given me a lot to chew on. What starts as a seemingly
        technical reference on how humble electrical circuits can be used to
        produce sound builds up over its chapters to a chorus of observations
        about human psychology, our relationships with music and other stimulus,
        and how the craft of musicians is enhanced—or prohibited—by computers.
      </p>
      <p>
        It’s the kind of book that I grabbed mostly because it looked beautiful
        and its title features words I like to see on the covers of books:
        Music; Sound; Electronics. It more than satisfies the cover’s premise by
        explaining, in some depth, how sounds are produced, augmented,
        amplified, and encoded by electronics, and along the way manages to
        weave in incredible metaphors and (albeit sometimes dated) observations
        of human life.
      </p>
      <p>
        <Link href="https://amzn.to/2QHZpUI">Buy the book on Amazon.</Link>
      </p>
    </Layout>
  )
}
