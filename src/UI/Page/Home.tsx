import React, { useContext } from 'react'
import { Context } from '../../Context/ContextWrapper';
import { ReqWhiteList } from '../Components/ReqWhiteList/ReqWhiteList';
import { ViewWhiteList } from '../Components/ViewWhiteList/ViewWhiteList';

const Home = () => {

  const { user } = useContext(Context)

  if (!user.address) {
    return <p className={'text-center mt-5'} style={{ fontSize: "35px" }}>Войдите в аккаунт</p>
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p className={'text-center mt-5'} style={{ fontSize: "35px" }}>Ваш логин: {user.login}</p>
      <p className={'text-center mt-5'} style={{ fontSize: "35px" }}>Баланс токенов: {user.balance}</p>
      <p className={'text-center mt-5'} style={{ fontSize: "35px" }}>Ваш адрес: {user.address}</p>
      {!user.presWhiteList ? <p className={'text-center mt-5'} style={{ fontSize: "35px" }}>Вы в вайтлисте</p> : <ReqWhiteList address={user.address} />}
      {user.admin ? <ViewWhiteList address={user.address} /> : undefined}
    </div>

  )
}
export default Home;