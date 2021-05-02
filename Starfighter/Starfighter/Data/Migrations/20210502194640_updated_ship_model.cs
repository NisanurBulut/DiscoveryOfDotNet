using Microsoft.EntityFrameworkCore.Migrations;

namespace Starfighter.Data.Migrations
{
    public partial class updated_ship_model : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Ship",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageLink",
                table: "Ship",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Ship");

            migrationBuilder.DropColumn(
                name: "ImageLink",
                table: "Ship");
        }
    }
}
