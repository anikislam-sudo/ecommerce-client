import React from 'react';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            
        </div>
    );
};

export default DashboardLayout;