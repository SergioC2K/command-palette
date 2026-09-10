// domain/commands.js
// Fuente única de verdad. `cmd` no se traduce (es código real);
// `desc` tiene versión es/en. Para agregar un comando nuevo,
// solo edita este archivo.

export const categories = [
  {
    id: "git",
    name: "Git",
    items: [
      {
        cmd: "git status",
        desc: { es: "Ver estado del repo", en: "View repo status" },
      },
      {
        cmd: "git add .",
        desc: { es: "Agregar todos los cambios", en: "Stage all changes" },
      },
      {
        cmd: 'git commit -m "mensaje"',
        desc: { es: "Confirmar cambios", en: "Commit changes" },
      },
      {
        cmd: "git push origin main",
        desc: { es: "Subir cambios", en: "Push changes" },
      },
      {
        cmd: "git pull",
        desc: { es: "Traer cambios remotos", en: "Pull remote changes" },
      },
      {
        cmd: "git clone ",
        desc: { es: "Clonar repositorio", en: "Clone repository" },
      },
      { cmd: "git branch", desc: { es: "Listar ramas", en: "List branches" } },
      {
        cmd: "git checkout -b nueva-rama",
        desc: { es: "Crear y cambiar de rama", en: "Create and switch branch" },
      },
      {
        cmd: "git switch main",
        desc: { es: "Cambiar de rama", en: "Switch branch" },
      },
      {
        cmd: "git merge rama",
        desc: { es: "Fusionar rama", en: "Merge branch" },
      },
      {
        cmd: "git log --oneline --graph",
        desc: { es: "Historial compacto", en: "Compact history log" },
      },
      {
        cmd: "git diff",
        desc: { es: "Ver cambios sin commit", en: "View uncommitted changes" },
      },
      {
        cmd: "git stash",
        desc: {
          es: "Guardar cambios temporalmente",
          en: "Temporarily stash changes",
        },
      },
      {
        cmd: "git reset --hard HEAD",
        desc: { es: "Descartar cambios locales", en: "Discard local changes" },
      },
      {
        cmd: "git rebase -i HEAD~3",
        desc: { es: "Reescribir últimos commits", en: "Rewrite last commits" },
      },
    ],
  },
  {
    id: "python",
    name: "Python",
    items: [
      {
        cmd: "python3 -m venv venv",
        desc: { es: "Crear entorno virtual", en: "Create virtual environment" },
      },
      {
        cmd: "source venv/bin/activate",
        desc: {
          es: "Activar entorno (Linux/Mac)",
          en: "Activate environment (Linux/Mac)",
        },
      },
      {
        cmd: "venv\\Scripts\\activate",
        desc: {
          es: "Activar entorno (Windows)",
          en: "Activate environment (Windows)",
        },
      },
      {
        cmd: "pip install -r requirements.txt",
        desc: { es: "Instalar dependencias", en: "Install dependencies" },
      },
      {
        cmd: "pip freeze > requirements.txt",
        desc: { es: "Guardar dependencias", en: "Save dependencies" },
      },
      {
        cmd: "pip install --upgrade pip",
        desc: { es: "Actualizar pip", en: "Upgrade pip" },
      },
      {
        cmd: "python3 -m pip list",
        desc: {
          es: "Listar paquetes instalados",
          en: "List installed packages",
        },
      },
      {
        cmd: "python3 manage.py runserver",
        desc: { es: "Servidor Django", en: "Django dev server" },
      },
      {
        cmd: "pytest -v",
        desc: { es: "Correr tests con detalle", en: "Run tests verbosely" },
      },
      {
        cmd: "python3 -m http.server 8000",
        desc: { es: "Servidor HTTP rápido", en: "Quick HTTP server" },
      },
      { cmd: "black .", desc: { es: "Formatear código", en: "Format code" } },
      { cmd: "flake8 .", desc: { es: "Linter de estilo", en: "Style linter" } },
      {
        cmd: "pip show ",
        desc: { es: "Ver detalles de un paquete", en: "Show package details" },
      },
    ],
  },
  {
    id: "docker",
    name: "Docker",
    items: [
      {
        cmd: "docker ps",
        desc: { es: "Contenedores en ejecución", en: "Running containers" },
      },
      {
        cmd: "docker ps -a",
        desc: { es: "Todos los contenedores", en: "All containers" },
      },
      {
        cmd: "docker images",
        desc: { es: "Listar imágenes", en: "List images" },
      },
      {
        cmd: "docker build -t nombre .",
        desc: { es: "Construir imagen", en: "Build image" },
      },
      {
        cmd: "docker run -it nombre",
        desc: {
          es: "Ejecutar contenedor interactivo",
          en: "Run interactive container",
        },
      },
      {
        cmd: "docker run -d -p 8080:80 nombre",
        desc: {
          es: "Ejecutar en segundo plano con puerto",
          en: "Run in background with port",
        },
      },
      {
        cmd: "docker stop ",
        desc: { es: "Detener contenedor", en: "Stop container" },
      },
      {
        cmd: "docker rm ",
        desc: { es: "Eliminar contenedor", en: "Remove container" },
      },
      {
        cmd: "docker rmi ",
        desc: { es: "Eliminar imagen", en: "Remove image" },
      },
      {
        cmd: "docker exec -it  bash",
        desc: {
          es: "Entrar a la terminal del contenedor",
          en: "Open a shell in the container",
        },
      },
      {
        cmd: "docker logs -f ",
        desc: { es: "Ver logs en tiempo real", en: "View live logs" },
      },
      {
        cmd: "docker-compose up -d",
        desc: {
          es: "Levantar servicios en segundo plano",
          en: "Start services in the background",
        },
      },
      {
        cmd: "docker-compose down",
        desc: {
          es: "Detener y eliminar servicios",
          en: "Stop and remove services",
        },
      },
      {
        cmd: "docker system prune -a",
        desc: { es: "Limpiar todo lo no usado", en: "Clean up unused data" },
      },
      {
        cmd: "docker network ls",
        desc: { es: "Listar redes", en: "List networks" },
      },
    ],
  },
  {
    id: "node",
    name: "Node / npm",
    items: [
      {
        cmd: "npm init -y",
        desc: { es: "Crear package.json", en: "Create package.json" },
      },
      {
        cmd: "npm install",
        desc: { es: "Instalar dependencias", en: "Install dependencies" },
      },
      {
        cmd: "npm install ",
        desc: { es: "Agregar dependencia", en: "Add dependency" },
      },
      {
        cmd: "npm install -D ",
        desc: { es: "Dependencia de desarrollo", en: "Dev dependency" },
      },
      {
        cmd: "npm run dev",
        desc: { es: "Correr script de desarrollo", en: "Run dev script" },
      },
      {
        cmd: "npm run build",
        desc: { es: "Compilar para producción", en: "Build for production" },
      },
      {
        cmd: "npx create-vite@latest",
        desc: { es: "Crear proyecto Vite", en: "Create Vite project" },
      },
      {
        cmd: "npm outdated",
        desc: {
          es: "Ver paquetes desactualizados",
          en: "Check outdated packages",
        },
      },
      {
        cmd: "npm update",
        desc: { es: "Actualizar dependencias", en: "Update dependencies" },
      },
      {
        cmd: "npm audit fix",
        desc: { es: "Corregir vulnerabilidades", en: "Fix vulnerabilities" },
      },
    ],
  },
  {
    id: "terminal",
    name: "Terminal",
    items: [
      {
        cmd: "ls -la",
        desc: {
          es: "Listar archivos con detalle",
          en: "List files with details",
        },
      },
      {
        cmd: "cd ",
        desc: { es: "Cambiar de directorio", en: "Change directory" },
      },
      {
        cmd: "pwd",
        desc: { es: "Mostrar ruta actual", en: "Show current path" },
      },
      {
        cmd: "mkdir -p carpeta/sub",
        desc: { es: "Crear carpetas anidadas", en: "Create nested folders" },
      },
      {
        cmd: "rm -rf ",
        desc: {
          es: "Eliminar carpeta forzosamente",
          en: "Force-remove folder",
        },
      },
      {
        cmd: "cp -r origen destino",
        desc: { es: "Copiar carpeta", en: "Copy folder" },
      },
      {
        cmd: "mv origen destino",
        desc: { es: "Mover o renombrar", en: "Move or rename" },
      },
      {
        cmd: 'grep -r "texto" .',
        desc: { es: "Buscar texto en archivos", en: "Search text in files" },
      },
      {
        cmd: 'find . -name "*.js"',
        desc: { es: "Buscar archivos por nombre", en: "Find files by name" },
      },
      {
        cmd: "chmod +x script.sh",
        desc: {
          es: "Dar permisos de ejecución",
          en: "Grant execute permission",
        },
      },
      {
        cmd: "ps aux | grep node",
        desc: { es: "Buscar proceso en ejecución", en: "Find running process" },
      },
      {
        cmd: "kill -9 ",
        desc: { es: "Forzar cierre de proceso", en: "Force kill process" },
      },
      {
        cmd: "curl -I https://ejemplo.com",
        desc: { es: "Ver headers de una URL", en: "View URL headers" },
      },
      {
        cmd: "history | grep ",
        desc: { es: "Buscar en historial", en: "Search command history" },
      },
    ],
  },
  {
    id: "sql",
    name: "SQL",
    items: [
      {
        cmd: "SELECT * FROM tabla;",
        desc: { es: "Ver todos los registros", en: "View all records" },
      },
      {
        cmd: "SELECT col FROM tabla WHERE cond;",
        desc: { es: "Filtrar registros", en: "Filter records" },
      },
      {
        cmd: "INSERT INTO tabla (col) VALUES (val);",
        desc: { es: "Insertar registro", en: "Insert record" },
      },
      {
        cmd: "UPDATE tabla SET col=val WHERE cond;",
        desc: { es: "Actualizar registros", en: "Update records" },
      },
      {
        cmd: "DELETE FROM tabla WHERE cond;",
        desc: { es: "Eliminar registros", en: "Delete records" },
      },
      {
        cmd: "CREATE TABLE tabla (id INT PRIMARY KEY);",
        desc: { es: "Crear tabla", en: "Create table" },
      },
      {
        cmd: "ALTER TABLE tabla ADD col TIPO;",
        desc: { es: "Agregar columna", en: "Add column" },
      },
      {
        cmd: "JOIN tabla2 ON a.id = b.id",
        desc: { es: "Unir tablas", en: "Join tables" },
      },
      {
        cmd: "GROUP BY col HAVING cond;",
        desc: { es: "Agrupar con filtro", en: "Group with filter" },
      },
      {
        cmd: "psql -U usuario -d basededatos",
        desc: { es: "Conectar a PostgreSQL", en: "Connect to PostgreSQL" },
      },
      {
        cmd: "mysql -u usuario -p",
        desc: { es: "Conectar a MySQL", en: "Connect to MySQL" },
      },
      {
        cmd: "\\dt",
        desc: { es: "Listar tablas (psql)", en: "List tables (psql)" },
      },
      {
        cmd: "SHOW TABLES;",
        desc: { es: "Listar tablas (MySQL)", en: "List tables (MySQL)" },
      },
    ],
  },
  {
    id: "k8s",
    name: "Kubernetes",
    items: [
      { cmd: "kubectl get pods", desc: { es: "Listar pods", en: "List pods" } },
      {
        cmd: "kubectl get nodes",
        desc: { es: "Listar nodos del clúster", en: "List cluster nodes" },
      },
      {
        cmd: "kubectl get svc",
        desc: { es: "Listar servicios", en: "List services" },
      },
      {
        cmd: "kubectl get deployments",
        desc: { es: "Listar deployments", en: "List deployments" },
      },
      {
        cmd: "kubectl apply -f archivo.yaml",
        desc: { es: "Aplicar configuración", en: "Apply configuration" },
      },
      {
        cmd: "kubectl delete -f archivo.yaml",
        desc: {
          es: "Eliminar recursos del archivo",
          en: "Delete resources from file",
        },
      },
      {
        cmd: "kubectl describe pod ",
        desc: { es: "Detalles de un pod", en: "Pod details" },
      },
      {
        cmd: "kubectl logs -f ",
        desc: { es: "Ver logs en tiempo real", en: "View live logs" },
      },
      {
        cmd: "kubectl exec -it  -- bash",
        desc: {
          es: "Entrar a la terminal del pod",
          en: "Open a shell in the pod",
        },
      },
      {
        cmd: "kubectl delete pod ",
        desc: { es: "Eliminar un pod", en: "Delete a pod" },
      },
      {
        cmd: "kubectl scale deployment nombre --replicas=3",
        desc: { es: "Escalar réplicas", en: "Scale replicas" },
      },
      {
        cmd: "kubectl get all -n ",
        desc: {
          es: "Ver todo en un namespace",
          en: "View everything in a namespace",
        },
      },
      {
        cmd: "kubectl get pods -o wide",
        desc: {
          es: "Pods con detalle de nodo/IP",
          en: "Pods with node/IP details",
        },
      },
      {
        cmd: "kubectl config get-contexts",
        desc: {
          es: "Ver contextos disponibles",
          en: "View available contexts",
        },
      },
      {
        cmd: "kubectl config use-context ",
        desc: {
          es: "Cambiar de contexto/clúster",
          en: "Switch context/cluster",
        },
      },
    ],
  },
  {
    id: "aws",
    name: "AWS CLI",
    items: [
      {
        cmd: "aws configure",
        desc: { es: "Configurar credenciales", en: "Configure credentials" },
      },
      {
        cmd: "aws s3 ls",
        desc: { es: "Listar buckets S3", en: "List S3 buckets" },
      },
      {
        cmd: "aws s3 cp archivo s3://bucket/",
        desc: { es: "Subir archivo a S3", en: "Upload file to S3" },
      },
      {
        cmd: "aws s3 sync ./carpeta s3://bucket/",
        desc: { es: "Sincronizar carpeta con S3", en: "Sync folder to S3" },
      },
      {
        cmd: "aws ec2 describe-instances",
        desc: { es: "Listar instancias EC2", en: "List EC2 instances" },
      },
      {
        cmd: "aws ec2 start-instances --instance-ids id",
        desc: { es: "Iniciar instancia", en: "Start instance" },
      },
      {
        cmd: "aws ec2 stop-instances --instance-ids id",
        desc: { es: "Detener instancia", en: "Stop instance" },
      },
      {
        cmd: "aws lambda list-functions",
        desc: { es: "Listar funciones Lambda", en: "List Lambda functions" },
      },
      {
        cmd: "aws logs tail /aws/lambda/nombre --follow",
        desc: { es: "Ver logs en tiempo real", en: "Tail logs in real time" },
      },
      {
        cmd: "aws sts get-caller-identity",
        desc: { es: "Ver identidad actual", en: "Show current identity" },
      },
      {
        cmd: "aws iam list-users",
        desc: { es: "Listar usuarios IAM", en: "List IAM users" },
      },
    ],
  },
  {
    id: "ssh",
    name: "SSH",
    items: [
      {
        cmd: "ssh usuario@servidor",
        desc: {
          es: "Conectar a servidor remoto",
          en: "Connect to remote server",
        },
      },
      {
        cmd: "ssh -i llave.pem usuario@servidor",
        desc: { es: "Conectar usando una llave", en: "Connect using a key" },
      },
      {
        cmd: 'ssh-keygen -t ed25519 -C "correo"',
        desc: { es: "Generar llave SSH", en: "Generate SSH key" },
      },
      {
        cmd: "ssh-copy-id usuario@servidor",
        desc: {
          es: "Copiar llave pública al servidor",
          en: "Copy public key to server",
        },
      },
      {
        cmd: "scp archivo usuario@servidor:/ruta",
        desc: { es: "Copiar archivo al servidor", en: "Copy file to server" },
      },
      {
        cmd: "scp usuario@servidor:/ruta ./",
        desc: {
          es: "Copiar archivo desde el servidor",
          en: "Copy file from server",
        },
      },
      {
        cmd: "scp -r carpeta usuario@servidor:/ruta",
        desc: { es: "Copiar carpeta al servidor", en: "Copy folder to server" },
      },
      {
        cmd: "ssh -L 8080:localhost:80 usuario@servidor",
        desc: { es: "Reenvío de puerto local", en: "Local port forwarding" },
      },
      {
        cmd: "cat ~/.ssh/id_ed25519.pub",
        desc: { es: "Ver llave pública", en: "Show public key" },
      },
      {
        cmd: "ssh -v usuario@servidor",
        desc: {
          es: "Conectar con detalle de depuración",
          en: "Connect with verbose debug output",
        },
      },
    ],
  },
  {
    id: "linux",
    name: "Linux",
    items: [
      {
        cmd: "systemctl status servicio",
        desc: { es: "Ver estado de un servicio", en: "Check service status" },
      },
      {
        cmd: "systemctl restart servicio",
        desc: { es: "Reiniciar un servicio", en: "Restart a service" },
      },
      {
        cmd: "systemctl enable servicio",
        desc: {
          es: "Activar servicio al iniciar",
          en: "Enable service at boot",
        },
      },
      {
        cmd: "journalctl -u servicio -f",
        desc: {
          es: "Ver logs de un servicio en vivo",
          en: "Follow service logs",
        },
      },
      { cmd: "df -h", desc: { es: "Ver uso de disco", en: "Show disk usage" } },
      {
        cmd: "du -sh carpeta",
        desc: { es: "Ver tamaño de una carpeta", en: "Show folder size" },
      },
      {
        cmd: "free -h",
        desc: { es: "Ver uso de memoria", en: "Show memory usage" },
      },
      {
        cmd: "htop",
        desc: { es: "Ver procesos en ejecución", en: "Show running processes" },
      },
      {
        cmd: "sudo apt update && sudo apt upgrade",
        desc: {
          es: "Actualizar paquetes (Debian/Ubuntu)",
          en: "Update packages (Debian/Ubuntu)",
        },
      },
      {
        cmd: "whoami",
        desc: { es: "Ver usuario actual", en: "Show current user" },
      },
      {
        cmd: "uname -a",
        desc: { es: "Ver información del sistema", en: "Show system info" },
      },
      {
        cmd: "ip a",
        desc: { es: "Ver interfaces de red", en: "Show network interfaces" },
      },
      {
        cmd: "netstat -tulpn",
        desc: { es: "Ver puertos abiertos", en: "Show open ports" },
      },
      {
        cmd: "crontab -e",
        desc: { es: "Editar tareas programadas", en: "Edit scheduled tasks" },
      },
    ],
  },
  {
    id: "windows-net",
    name: "Windows / Redes",
    items: [
      {
        cmd: "netsh wlan show profiles",
        desc: {
          es: "Listar redes WiFi guardadas",
          en: "List saved WiFi networks",
        },
      },
      {
        cmd: 'netsh wlan show profile name="NombreRed" key=clear',
        desc: {
          es: "Ver contraseña de una red guardada",
          en: "Show saved network password",
        },
      },
      {
        cmd: "netsh wlan show interfaces",
        desc: {
          es: "Ver estado del adaptador WiFi",
          en: "Show WiFi adapter status",
        },
      },
      {
        cmd: 'netsh wlan connect name="NombreRed"',
        desc: {
          es: "Conectar a una red guardada",
          en: "Connect to a saved network",
        },
      },
      {
        cmd: "netsh wlan disconnect",
        desc: {
          es: "Desconectar del WiFi actual",
          en: "Disconnect from current WiFi",
        },
      },
      {
        cmd: 'netsh wlan delete profile name="NombreRed"',
        desc: { es: "Eliminar una red guardada", en: "Delete a saved network" },
      },
      {
        cmd: 'netsh wlan export profile key=clear folder="C:\\ruta"',
        desc: {
          es: "Exportar perfiles WiFi con contraseña",
          en: "Export WiFi profiles with password",
        },
      },
      {
        cmd: "ipconfig /all",
        desc: {
          es: "Ver configuración completa de red",
          en: "Show full network configuration",
        },
      },
      {
        cmd: "ipconfig /flushdns",
        desc: { es: "Limpiar caché DNS", en: "Flush DNS cache" },
      },
      {
        cmd: "ipconfig /release",
        desc: { es: "Liberar dirección IP", en: "Release IP address" },
      },
      {
        cmd: "ipconfig /renew",
        desc: { es: "Renovar dirección IP", en: "Renew IP address" },
      },
      {
        cmd: "ping 8.8.8.8",
        desc: {
          es: "Probar conectividad a internet",
          en: "Test internet connectivity",
        },
      },
      {
        cmd: "tracert dominio.com",
        desc: {
          es: "Rastrear ruta hacia un destino",
          en: "Trace route to a destination",
        },
      },
      {
        cmd: "netstat -ano",
        desc: {
          es: "Ver conexiones activas y puertos",
          en: "Show active connections and ports",
        },
      },
    ],
  },
];
