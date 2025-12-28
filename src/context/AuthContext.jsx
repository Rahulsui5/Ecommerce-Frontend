import {createContext,useContext, useState} from 'react'
const AuthContext=createContext()
export const AuthProvider=({children})=>{
  const isUserExist=localStorage.getItem("userID")
  const [isLogin, setIsLogin] = useState(isUserExist?true:false)
  return(
    <AuthContext.Provider value={{isLogin,setIsLogin}}>
    {children}
  </AuthContext.Provider>
  )
}
export const UseAuthContext=()=>{
  return useContext(AuthContext)
}
export default AuthContext