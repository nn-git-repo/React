import React, { useState } from 'react'

//HOC 1.authentication
const withAuth = (WrappedComponent) => {
    return (props) =>{
        const isLoggedIn = props.isLoggedIn;
        if(!isLoggedIn){
            return<h2>Please Login to access enployee portal</h2>
        }
        return <WrappedComponent {...props} />
    }

}

//HOC 2.Role-based Authorization
const withRole = (allowedRoles) => (WrappedComponent) =>{
    return(props) =>{
        if(!allowedRoles.includes(props.role)){
            return <h2> Access Denied: Insufficient Role</h2>
        }
        return <WrappedComponent {...props} />
    }
}

//HOC 3.Logger
const withLogger = (WrappedComponent) =>{
    return(props) =>{
        console.log("Logger HOC: Props Received", props)
        return <WrappedComponent {...props} />
    }
}

//HOC 4. Theme Provider
const withTheme = (WrappedComponent) => {
    return(props) =>{
        const themeStyle = props.theme === "dark"
        ?{background: "#333", color:"#fff", padding:"20px"}
        :{background: "#f9f9f9",color:"#000",padding:"20px"}

        return(
            <div style={themeStyle}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

//HOC 5. Error Boundary
const withErrorBoundary = (WrappedComponent)=>{
    return class extends React.Component{
        constructor(props){
            super(props)
            this.state = {hasError: true}
        }

        static getDerviedStateFromError(){
            return {hasError: true}
        }

        componentDidCatch(error, info){
            console.error("Error caught by HOC Error Boundary", error, info)
        }

      render(){
        if(this.state.hasError){
            return <h2>Something went wrong!</h2>
        }
        return <WrappedComponent {...this.props} />
      }

    }
}

const EmployeeDashboard = ({role}) =>{
    if(!role) throw new Error("Role not found");
    return(
        <div>
            <h1>Welcome to Employee Portal</h1>
            <h3>Role: {role}</h3>
            <p>Here is your dashboard with employee details.</p>
        </div>
    )
}

const EnhancedEmployeeDashboard = withAuth(
    withRole(['Admin','Employee'])(withLogger(withTheme(withErrorBoundary(EmployeeDashboard))))
)

const EmployeeHOC = () => {
 const [user] = useState({
    isLoggedIn: true,
    role: "Employee", //change the role into user =check the error
    theme: "dark" //change into light and see the output
 })

  return (
    <div>
       <EnhancedEmployeeDashboard isLoggedIn={user.isLoggedIn}
       role={user.role} theme={user.theme} />

    </div>
  )
}

export default EmployeeHOC