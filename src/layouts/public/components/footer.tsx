import React from 'react'

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-100 text-gray-700 p-4 mt-8">
			<div className="container mx-auto text-center text-sm">
				© {new Date().getFullYear()} ASBL — All rights reserved
			</div>
		</footer>
	)
}

export default Footer
