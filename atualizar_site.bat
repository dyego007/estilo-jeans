@echo off
rem Configura o terminal para UTF-8 para exibir acentuações corretas
chcp 65001 > nul
echo ===================================================
echo   ATUALIZADOR DE CATÁLOGO - ESTILO JEANS TUPÃ
echo ===================================================
echo.
echo 1. Buscando fotos e novidades do Instagram...
python sync_instagram.py
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERRO] Falha ao sincronizar com o Instagram.
    echo Verifique sua conexão ou se o cookies.json está atualizado.
    echo Lembre-se que você pode usar os dados locais/mockados para testes!
    echo.
    pause
    exit /b
)
echo.
echo 2. Publicando atualizações no site...
git --version > nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [AVISO] Git não está instalado neste computador.
    echo As fotos foram atualizadas localmente, mas você precisará
    echo enviar os arquivos manualmente para seu servidor ou GitHub.
) else (
    git add .
    git commit -m "Sincronização automática do catálogo Estilo Jeans"
    git push
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo [AVISO] Não foi possível enviar os dados via Git.
        echo Se você ainda não configurou a hospedagem Git (ex: GitHub Pages),
        echo isto é normal. As fotos foram atualizadas localmente com sucesso!
    ) else (
        echo.
        echo [SUCESSO] O site live foi atualizado e estará no ar em instantes!
    )
)
echo.
echo Concluído!
pause
