import './twitterNote.scss';

export default (props) => (
    <div className='twitter-note'>
        <div className='twitter-note-content'
            dangerouslySetInnerHTML={{__html: props.note.content}}>
        </div>
        <p>记录于 {props.note.createdAt}</p>
    </div>
)