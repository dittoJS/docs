import './NotesList.scss';
import utils from '../../utils.js';

export default (props) => (
    <div className='notes-list'>
        <ul>
            {
                props.items.map((item) => {
                    return <li className="note-item" key={item.key}>
                          <a href={utils.url(`${props.path || '/post'}/${item.key}/`)} className="note-item-title">
                            {item.title}
                          </a>
                        <span className="create-time">
                          {item.createdAt}
                        </span>
                      </li>;
                })
            }
        </ul>
    </div>
)
