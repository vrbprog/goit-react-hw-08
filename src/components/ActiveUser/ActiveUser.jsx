import css from './ActiveUser.module.css';

export default function ActiveUser({user}) {
    return (
        <div className={css.userinfo}>
            <h2 className={css.username}>{user.name}</h2>
        </div>
    );
};
