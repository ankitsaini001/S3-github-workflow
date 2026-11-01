import { CHANNEL, FEATURED, SHORTS, shortUrl, thumbnail, videoUrl } from '../data/channel.js'
import { ArrowIcon, PlayIcon } from './icons.jsx'

const external = { target: '_blank', rel: 'noopener noreferrer' }

function FeaturedVideo() {
  return (
    <a href={videoUrl(FEATURED.id)} {...external} className="featured reveal">
      <div className="thumb">
        <img src={thumbnail(FEATURED.id)} alt="" loading="lazy" />
        <span className="play"><PlayIcon size={26} /></span>
        <span className="duration">{FEATURED.duration}</span>
      </div>
      <div className="featured-body">
        <span className="pill">Featured · {FEATURED.tag}</span>
        <h3>{FEATURED.title}</h3>
        <p>{FEATURED.description}</p>
        <span className="text-link">
          Watch on YouTube <ArrowIcon size={14} />
        </span>
      </div>
    </a>
  )
}

export default function Videos() {
  return (
    <section id="videos">
      <div className="section-head-row reveal">
        <div className="section-head">
          <div className="eyebrow">Latest videos</div>
          <h2>Concepts that click in minutes.</h2>
          <p>Short, visual explainers — most of them under a minute.</p>
        </div>
        <a href={CHANNEL.youtube.url} {...external} className="btn btn-ghost">
          View all on YouTube <ArrowIcon />
        </a>
      </div>

      <FeaturedVideo />

      <h3 className="sub-head reveal">Shorts</h3>
      <div className="shorts">
        {SHORTS.map((video) => (
          <a href={shortUrl(video.id)} {...external} className="short reveal" key={video.id}>
            <div className="thumb">
              <img src={thumbnail(video.id, 'oardefault')} alt="" loading="lazy" />
              <span className="play"><PlayIcon /></span>
            </div>
            <span className="pill">{video.tag}</span>
            <h4>{video.title}</h4>
          </a>
        ))}
      </div>
    </section>
  )
}
