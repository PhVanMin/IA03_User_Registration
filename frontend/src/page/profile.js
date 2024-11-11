const Profile = ({ name = "John Doe", age = 30 }) => {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        return (<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <p className="font-bold text-2xl">Unauthorized 401</p>
        </div>)
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-md w-full max-w-md overflow-hidden">
                <div className="text-center py-6 bg-primary">
                    <h1 className="text-2xl font-bold text-white">Profile</h1>
                </div>
                <div className="flex flex-col items-center space-y-6 p-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
                        <img
                            src="https://placehold.co/600x400/000000/FFF"
                            alt="Profile picture"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-4 text-center">
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-500">Name</p>
                            <p className="text-lg">{name}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-gray-500">Age</p>
                            <p className="text-lg">{age}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;