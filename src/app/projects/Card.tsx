export default function Card({project = {
    id: "001",
    name: "Sample Project",
    description: "This is a sample project description to demonstrate the card layout and styling.",
    image: "https://via.placeholder.com/400x200/3b82f6/ffffff?text=Project+Image"
}}:{     
    project?:{         
        id:string,         
        name:string,         
        description:string,
        image:string,      
    } 
} = {}){
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 overflow-hidden">
            <div className="w-full h-48 bg-gray-200 overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>
            
            <div className="p-6">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {project.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                    </p>
                </div>
                
                <div className="flex items-center">
                    <span className="text-xs text-gray-400 font-mono">
                        #{project.id}
                    </span>
                </div>
            </div>
        </div>
    )
}