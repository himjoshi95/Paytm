import {Link} from 'react-router-dom'


export function BottomWarning({label,to,buttonText}) {
    return (
        <div className='py-2 flex justify-center gap-1'>
            <div>{label}</div>
            <Link className='underline' to={to}>{buttonText }</Link>
        </div>
    )
}