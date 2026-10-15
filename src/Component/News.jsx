import React, { useState, useEffect } from 'react';
import AddNews from './AddNews'; 

function News(props) {
    
  let articlesb = [
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "www.wsj.com",
      "title": "NKorea Testing Swarm Attacks Mixing Drones and Missiles...",
      "description": "Kim Jong Un’s regime is incorporating tactics proving successful against Western air defenses in Europe and the Middle East",
      "url": "https://www.wsj.com/world/north-korea-is-testing-swarm-attacks-mixing-drones-and-missiles-6f8a0a38",
      "urlToImage": "https://images.wsj.net/im-68275130/social",
      "publishedAt": "2026-09-27T13:00:13Z",
      "content": "North Korea has started practicing swarm attacks that combine unmanned systems with conventional weapons, adopting tactics already used in Ukraine and the Middle East that could challenge U.S. and al… [+496 chars]"
    },
     {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Connor Hart",
      "title": "General Mills Bets on New Products, Marketing to Drive Turnaround",
      "description": "The maker of Cheerios and Annie’s macaroni and cheese posted a profit of $397 million in the fiscal first quarter, down from $1.2 billion a year earlier.",
      "url": "https://www.wsj.com/business/retail/general-mills-profit-sales-slip-as-turnaround-continues-14bcb98a",
      "urlToImage": "https://s.yimg.com/lo/mysterio/api/8fa912eae8c32458dd85324c9e7d6eac50b5c8628a29aa3c5578059161ccc7ee/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fthe_wall_street_journal_hosted_996%2F2e9fc2ff20884544aa5d53026f9aa060.jpg",
      "publishedAt": "2026-09-23T13:07:00Z",
      "content": "General Mills reported lower profit and sales in its fiscal first quarter. - LISA BAERTLEIN/REUTERS\r\nGeneral Mills said its turnaround is progressing, slowly but surely.\r\nThe Cheerios and Pillsbury d… [+2228 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Alex Janin and Dominic Chopping",
      "title": "Wegovy Maker Novo Promises New Drugs to Boost Sales, but Investors Are Wary",
      "description": "Shares in the company fell more than 4% as its CEO laid out plans for new blockbuster drugs in the next few years.",
      "url": "https://www.wsj.com/health/pharma/wegovy-maker-novo-nordisk-targets-several-new-blockbuster-drugs-in-coming-years-357fe9a3",
      "urlToImage": "https://s.yimg.com/lo/mysterio/api/5c14c08b86d69dd7b436ef3efee9b70d46104379832712fd0015ec0825a45deb/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fthe_wall_street_journal_hosted_996%2F6c61e69a5d3d1b08f5efb9f487a6f014.jpg",
      "publishedAt": "2026-09-21T15:00:00Z",
      "content": "Novo shares moved lower on Monday. - Nichlas Pollier/Bloomberg News\r\nNovo Nordisk Chief Executive Mike Doustdar, who took over in 2025 promising to find a sustainable growth path, said the company wi… [+4600 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Caitlin McCabe",
      "title": "Stocks Climb as Markets Retrace Post-Fed Moves",
      "description": "U.S. stocks jump as investors shake off the jitters that followed the Federal Reserve’s first rate increase in three years.",
      "url": "https://www.wsj.com/finance/commodities-futures/stocks-rally-yields-fall-as-lower-oil-boosts-market-mood-e5c10b6c",
      "urlToImage": "https://s.yimg.com/lo/mysterio/api/2ce9b68ead2005e870d4c6c230847a2225f710ea64c8e275a339c608129aabb2/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fthe_wall_street_journal_hosted_996%2F08eefef243a3eb891ec12121bc238399.jpg",
      "publishedAt": "2026-09-17T14:22:00Z",
      "content": "The Dow Jones Industrial average is enduring its worst start to September since 2008. - Jeenah Moon/Reuters\r\nU.S. stocks are jumping and Treasury yields are sliding Thursday morning, as investors sha… [+985 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Joseph Wilkins",
      "title": "Eyes on Fed Decision After Bitcoin Trades Near 4-Week Low on Failed Clarity Vote",
      "description": "Bitcoin traded at $75,877 in afternoon European trade, after falling around 4% a day earlier to as low as $75,026. A Fed rate hike could further weigh on cry...",
      "url": "https://www.wsj.com/finance/currencies/eyes-on-fed-decision-after-bitcoin-trades-near-4-week-low-on-failed-clarity-vote-2b8af150",
      "urlToImage": "https://s.yimg.com/lo/mysterio/api/260c1fcc6f69d77e68b42133611948ad550395bf503a760f8e78061bb303bd5e/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fthe_wall_street_journal_hosted_996%2F962da2c267b37fa03f15c9bd228d9ec9.jpg",
      "publishedAt": "2026-09-16T11:58:00Z",
      "content": "The digital currency fell Tuesday following the U.S. Senate's rejection of a crypto-friendly bill. - Tyrone Siu/Reuters\r\nBitcoin was trading at a near four-week low Wednesday as investors await the F… [+2614 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Emese Bartha",
      "title": "Global Bond Selloff Deepens as 10-Year Yields Hit Multiyear Highs",
      "description": "The 10-year U.S. Treasury yield hit its highest level since 2007 ahead of the U.S. Federal Reserve’s interest rate decision.",
      "url": "https://www.wsj.com/finance/investing/u-s-10-year-treasury-yield-rises-to-highest-since-2007-91d1e44f",
      "urlToImage": "https://s.yimg.com/lo/mysterio/api/02d0e8a8c5a628e037fc3129f22df7f2ec333f4dd3554a8c69f80911b58be8ae/lightyear_networkapi/resizefill_w1200%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fthe_wall_street_journal_hosted_996%2F995e44f0f71683a1c773757e477aa28c.jpg",
      "publishedAt": "2026-09-15T19:23:00Z",
      "content": "The selloff in global bonds gained traction on Tuesday. - Brendan McDermid/Reuters\r\nThe selloff in global bonds gained traction on Tuesday, pushing the 10-year U.S. Treasury yield to its highest leve… [+3580 chars]"
    },
  ];
  const [article, setarticle] = useState(articlesb);
  const [loading, setloading] = useState(false);


    useEffect(() => {
      const search = props.scr || props.secondNav || "pakistan";
      fetchNews(search);

    }, [props.scr, props.secondNav])
    

    
    const fetchNews = async (search) => {
      setloading(true)
      const apiKeys = [
        "336444221e014a7cb98f6a8704269560",
        "714aa75b92694038adcb1c7d9a49cdb9",
        "9ce9f7399e7945d1b1d85aab263efa84",
        "01243f899d0a4e9096205f7f6b7a8dbb",
        
      ].filter(Boolean);

     try {
    const query = search === "all" ? "pakistan" : search;

    for (const key of apiKeys) {
      const url =
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}` +
        `&language=en&sortBy=publishedAt&apiKey=${key}`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok || data.status !== "ok") {
        console.error("NewsAPI Error:", response.status, data);
        continue;
      }

      setarticle(data.articles || []);
      return;
    }
  } catch (error) {
    console.error("Fetch Error:", error);
  } finally {
    setloading(false);
  }
    };
    const { newsarea, newsList = [] } = props;

    const displayedNews = newsarea ? newsList : article;   
      return (
        <div>
          <div>{loading=== false ?  "" :<div className="text-center my-5">
            <div
              className="spinner-border text-primary"
              role="status"
              aria-label="Loading news"
            ></div>
            <p className="mt-2">Loading news...</p>
          </div> } </div>
          {displayedNews.map((element, indx) => (
            <div key={indx}>
              <AddNews
                author={element.author}
                title={element.title}
                description={element.description}
                url={element.url}
                urlToImage={element.urlToImage?.startsWith( "https" || "https://biztoc.")
                          ? element.urlToImage : "https://taz.de/picture/8795549/1200/42288301.jpeg" }
                publishedAt={element.publishedAt}
                content={element.content}
              />
            </div>
          ))}

          {props.secondNav === "newsarea" ? 
          <div className="alert alert-info text-center my-4" role="alert">
              <h5>Your News Is Not Public Yet!</h5>
              <p className="mb-0">
                You can log in and add your own news, which will be displayed here for you only.
                Other users cannot see it yet. We're working on making your news visible to everyone soon!
              </p>
          </div> : <div>{displayedNews.length === 0 ? <div className="text-center my-5">
              <h4>Your Result Not Found 😕</h4>
              <p className="text-muted">
                Sorry, no news found. Try searching with different keywords.
                <h2>{props.scr || props.secondNav}</h2> 
              </p>
            </div> : ""}</div>}          
        </div>
      );
    
}
export default News;
