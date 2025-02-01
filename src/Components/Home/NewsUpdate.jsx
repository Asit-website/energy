import { newsData } from "../../Data/home"
import newsprofile from "../../assets/newsprofile.png"
import newchat from "../../assets/newchat.png"
import "./news.css"

function NewsUpdate() {
  return (
    <div className='newsfudpate'>

        <div className="newsupdate_cont">

            <div className="new_topss">
            <div className="newsupte_top">
                 <p className='hewhead'>News & Updates</p>
                  <p className='recenews'>Recent News</p>
                  <p className="newlinespas"><span className='nwline'></span>News</p>
               </div>

               <p className="righnewhpas">eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
            </div>

            <div className="newsbotton">
                   {
                    newsData?.map((news , index)=>(
                        <div key={index} className="singlnews">
                              <img src={news.img} alt="" />

                              <div className="newsdata">
                                 <p className="newstag">{news.tag}</p>
                                 <h4>{news.heading}</h4>

                                 <div className="newprofile">
                                    <div>
                                    <img src={newsprofile} alt="" />
                                    <span>By {news.by}</span>
                                    </div>

                                    <div>
                                        <img src={newchat} alt="" />
                                        <span>{news.comment} comment</span>
                                    </div>
                                 </div>
                              </div>

                        </div>
                    ))
                   }
            </div>

        </div>

    </div>
  )
}

export default NewsUpdate