import { FloatingDock } from '@/components/ui/FloatingDocs'; // Pastikan path benar

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      {/* Konten utama */}
      <main>{children}</main>

      {/* Floating Dock */}
      <FloatingDock
        items={dockItems}
        desktopClassName="fixed bottom-4 left-1/2 transform -translate-x-1/2" // Posisi di bawah tengah untuk desktop
        mobileClassName="fixed bottom-4 right-4" // Posisi di pojok kanan bawah untuk mobile
      />
    </div>
  );
};

export default MainLayout;
