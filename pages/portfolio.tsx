import Layout from "@/components/Layout"
import Link from "next/link"
import DeviceFrame from "@/components/DeviceFrame"
import LightswitchImage from "@/components/LightSwitchImage"
import Align from "@/components/Align"
import atoms from "@/components/designSystem/atoms"

export default function PortfolioPage() {
  return (
    <Layout frontMatter={{ title: "Portfolio" }}>
      <p>
        From independently designing and developing iOS apps, to helping scale
        design systems to support thousands of designers and engineers building
        products for Facebook’s billions of users and advertisers, I’ve spent
        years designing and building products at all kinds of scale. Below
        you’ll find a selection of my favourite projects and experiences.
      </p>
      <section>
        <header className="portfolio-header">
          <h3 className="portfolio-title">Solstice</h3>
          <small className="meta">Design &amp; Development</small>
        </header>
        <p>
          <DeviceFrame>
            <LightswitchImage
              height={2532}
              srcDark="/uploads/portfolio/solstice/dark.png"
              srcLight="/uploads/portfolio/solstice/light.png"
              width={1170}
            />
          </DeviceFrame>
        </p>
        <p>
          Solstice is an iOS app, independently designed and built by myself,
          that shows you the amount of daylight today compared to yesterday,
          along with information about the next and previous solstice.
        </p>
        <p>
          <Link href="https://solstice.daneden.me">Visit the microsite</Link> to
          learn more and download for free.
        </p>
      </section>

      <section>
        <header className="portfolio-header">
          <h3 className="portfolio-title">Eventually</h3>
          <small className="meta">Design &amp; Development</small>
        </header>
        <p>
          <DeviceFrame>
            <LightswitchImage
              height={2532}
              srcDark="/uploads/portfolio/eventually/dark.png"
              srcLight="/uploads/portfolio/eventually/light.png"
              width={1170}
            />
          </DeviceFrame>
        </p>
        <p>
          Eventually that shows you significant events coming up in the next
          week, month, and year. If you’ve ever been caught off guard by an
          unexpected birthday, or need to remember you’ve got that vacation to
          look forward to, Eventually is for you.
        </p>
        <p>
          <Link href="https://eventually.app">Visit the microsite</Link> to
          learn more.
        </p>
      </section>

      <section>
        <header className="portfolio-header">
          <h3 className="portfolio-title">Zeitgeist</h3>
          <small className="meta">Design &amp; Development</small>
        </header>
        <p>
          <DeviceFrame>
            <LightswitchImage
              height={2532}
              srcDark="/uploads/portfolio/zeitgeist/dark.png"
              srcLight="/uploads/portfolio/zeitgeist/light.png"
              width={1170}
            />
          </DeviceFrame>
        </p>
        <p>
          Zeitgeist is an iOS and Mac app that lets you see the status of your
          recent <Link href="https://vercel.com/home">Vercel</Link> deployments.
          It updates in (almost) real-time, giving you at-a-glance peace of mind
          about your web app deployments.
        </p>
        <p>
          <Link href="https://zeitgeist.daneden.me">Visit the microsite</Link>{" "}
          for details and to download.
        </p>
      </section>

      <hr />
      <h2>Facebook</h2>
      <p>
        I’m currently working as a Design Manager supporting Facebook’s Commerce
        Opportunities organisation, specifically focused on buyer consideration
        experiences for{" "}
        <Link href="https://en-gb.facebook.com/business/shops">
          Facebook Shops
        </Link>
        . Our team focuses on giving people the information they need to make an
        informed purchase decision, providing Facebook employees with the
        standards to build high-quality buyer experiences, and exploring the
        future of commerce with Facebook Shops.
      </p>
      <p>
        From 2017–2020, I worked as a Design Lead for Facebook’s Ads and
        Business Design System. My team and I created and maintained the visual
        language and web React components that power Facebook’s Ads and Business
        products, serving millions of Facebook Ads customers and thousands of
        Facebook engineers and designers.
      </p>
      <p>
        In late 2018–early 2019, the team worked closely with Facebook’s primary
        revenue-impacting product, Ads Manager, to help them{" "}
        <Link href="https://www.facebook.com/business/news/improving-ads-manager-and-business-manager">
          redesign the product
        </Link>{" "}
        in the pursuit of increased advertiser efficiency and customer value.
        This work was the first result of a coordinated effort to create a more
        cohesive advertising and marketing experience across all of Facebook’s
        business tools. More about this work can be found on the{" "}
        <Link href="https://www.facebook.com/business/m/one-sheeters/DesigningBetterAdvertiserExperiences">
          Facebook Business website
        </Link>
        .
      </p>
      <p>
        In late 2019, I relocated from Menlo Park, California to London, England
        to help support the Ads organisation and scale our design system team’s
        portfolio.
      </p>
      <p>
        Before working on the Ads and Business Design System I worked as a
        Product Designer on Facebook’s Brand Measurement team, devoting my time
        to creating new ways to measure and report ad effectiveness as it
        pertains to brand advertising.
      </p>
      <p>
        My first project at Facebook was{" "}
        <Link href="https://www.facebook.com/business/news/optimize-your-ads-with-split-testing?pnref=story">
          Split Testing
        </Link>
        , a tool allowing advertisers to test different ad strategies against
        one another to find the most effective way to spend their ad budgets on
        Facebook.
      </p>
      <h2>Dropbox</h2>
      <p>
        During my two and a half years at Dropbox, I worked on numerous projects
        across several different teams. Most notably, I worked with the Revenue
        &amp; Growth team on redesigning and{" "}
        <Link href="https://blogs.dropbox.com/dropbox/2014/08/introducing-more-powerful-dropbox-pro/">
          relaunching Dropbox Pro
        </Link>
        (now known as Dropbox Plus), an effort which involved both product work
        (in the form of building new features, such as password-protected shared
        links) and marketing efforts. Additionally, I helped lead the
        engineering efforts to build the marketing pages for Dropbox Pro.
      </p>
      <p>
        After the initial launch of the new offering, our team was poised to
        grow adoption. We spent months experimenting with marketing efforts, as
        well as refining the checkout experience. We saw a direct and
        substantial positive impact on subscriptions through our improvements.
      </p>
      <p>
        After working on Dropbox Pro, we spun off a small “blue sky” growth team
        to explore how we could foster increased adoption of our sharing tools.
        The most successful project to emerge from that team was the addition of{" "}
        <Link href="https://dribbble.com/shots/1972358-Faceholder">
          user avatars
        </Link>{" "}
        in the Dropbox Product. Adding user photos to the product led to
        increased sharing activity, just as we had hoped, but it also unlocked
        possibilities for other product teams to build richer, more user-centric
        experiences.
      </p>
      <p>
        In my final year at the company, I joined the Web Infrastructure team as
        a Design Engineer to work on Design Systems. I had spent all my tenure
        at Dropbox maintaining a suite of design tools, so was able to provide
        historical knowledge and engineering principles to address
        inconsistencies in both the design and implementation of many product
        surfaces. The result of my work was{" "}
        <Link href="http://dropbox.github.io/scooter/">Scooter</Link>, an
        open-source (S)CSS framework and design system adopted by several
        product teams to speed up their work.
      </p>

      <hr />

      <h2>Side Projects</h2>
      <p>
        If the work I do for money is my bread and butter, my side projects are
        the jam on top. I routinely embark on new side projects to explore
        coding opportunities and design styles outside of my employment.
      </p>

      <h3>Lucid Underground</h3>
      <p>
        Lucid Underground is a web app and companion iOS and watchOS app that
        shows the current status of the London Underground, London Overground,
        TfL Rail, and DLR transit systems. You can{" "}
        <Link href="https://underground.lucid.toys/">visit the website</Link> or{" "}
        <Link href="https://apps.apple.com/gb/app/lucid-underground/id1491993114">
          buy the app
        </Link>{" "}
        on the iOS App Store.
      </p>
      <h3>Who Would Win Bot</h3>
      <p>
        <Link href="https://twitter.com/WhoWouldWinBot">Who Would Win Bot</Link>{" "}
        is a Twitter bot that asks followers: in a fight between two random
        emoji, who would win?{" "}
        <Link href="https://twitter.com/WhoWouldWinBot/status/1070173517528866817">
          A Genie, or a potato?
        </Link>{" "}
        <Link href="https://twitter.com/WhoWouldWinBot/status/1069992274665320448">
          A bouquet, or a curling stone?
        </Link>{" "}
        View the{" "}
        <Link href="https://github.com/daneden/who-would-win">
          source of GitHub
        </Link>{" "}
        or{" "}
        <Link href="https://twitter.com/WhoWouldWinBot">
          follow it on Twitter
        </Link>
        .
      </p>
      <h3>Lucid</h3>
      <p>
        <Link href="https://chrome.google.com/webstore/detail/lucid/achogfadpkcepkepcpegehpiiioihmik">
          Lucid
        </Link>{" "}
        is a Google Chrome extension that replaces the New Tab page with a
        simple notepad. It’s useful for avoiding bad browsing habits and jotting
        down ideas or errands.
      </p>

      <h3>Brills</h3>
      <p>
        <Link href="http://brills.me">Brills</Link> is a simple money management
        web application built for budgeting quickly.{" "}
        <Link href="http://brills.me">Visit the site</Link>.
      </p>

      <h3>Animate.css</h3>
      <p>
        <Link href="http://animate.style/">Animate.css</Link> is a cross-browser
        plug-and-play CSS animation library for delightful animation in websites
        and web applications. Since I created the project in 2011, it has gone
        on to be used in tens of thousands of websites, growing into an active
        open source community.{" "}
        <Link href="http://animate.style/">Visit the site</Link>.
      </p>

      <style jsx>{`
        section {
          padding-top: 3rem;
          padding-bottom: 3rem;
        }

        .portfolio-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .portfolio-title {
          line-height: 1;
          font-family: ${atoms.font.family.display};
          font-style: normal;
          font-size: ${atoms.font.size.h1};
        }
      `}</style>
    </Layout>
  )
}
