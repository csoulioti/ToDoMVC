using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ToDoMVC.Startup))]
namespace ToDoMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
