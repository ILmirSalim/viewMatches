import './ErrorMessage.scss'
import error_icon from '../../assets/alert-triangle.svg'

export const ErrorMessage: React.FC = () => {
    return (
        <div className='error-block'>
            <img src={error_icon} alt="error-message" />
            <div>Ошибка: не удалось загрузить информацию</div>
        </div>
    )
}

