import './Video.css';

function Video({title,channel="Coder Dost",views,time}) {
  return (
      <> 
      <div className='container'>
      <div className="pic">
      <img src="https://placekitten.com/640/360" alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      </div>
      </>//this is called fragments .there is no need to create extra div when it is not necessary. bcz of 
      //extra div some time it might affect css styling. So use fragment instead of div when necesary.
  );
}

export default Video;
